import {
  Component,
  Injector,
  OnInit,
  inject,
  OnChanges,
  OnDestroy,
} from "@angular/core";
import { vehicleColor } from "src/app/core/constants/vehicleColor";
import { vehicleTypeData } from "src/app/core/constants/vehicleTypeData";
import { AutoAddClass } from "./auto-add.form.class";
import { HttpClient } from "@angular/common/http";
import { RentService } from "src/app/features/auto/api/rent.service";
import { Subscription } from "rxjs";
import { pricePeriodData } from "src/app/core/constants/pricePeriodData";
import { FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-auto-add",
  templateUrl: "./auto-add.component.html",
  styleUrls: ["./auto-add.component.scss"],
})
export class AutoAddComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpClient,
    private autoService: RentService,
    private formBuilder: FormBuilder
  ) {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      this.years.push(year);
    }
  }

  formChangesSubscription!: Subscription;

  ngOnInit(): void {
    const savedFormData = sessionStorage.getItem("myAuto");
    if (savedFormData) {
      this.addAutoForm.patchValue(JSON.parse(savedFormData));
    }

    this.formChangesSubscription = this.addAutoForm.valueChanges.subscribe(
      (value) => {
        sessionStorage.setItem(
          "myAuto",
          JSON.stringify({ ...value, images: this.filesList })
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.formChangesSubscription.unsubscribe();
  }

  autoTypes = vehicleTypeData;
  allVehicleColors = vehicleColor;
  pricePeriod = pricePeriodData;
  years: number[] = [];

  initialData = {
    price: "",
    price_period: 0,
    restrictions_mileage: 0,
    restrictions_region: "",
    trunk_capacity: "",
    children_chair: "",
    phone_holder: "",
    payments_allowed: [],
    deposit: "",
    reimbursement: "",
    // insurance_amount: "",
    insurance_availability: "",
    // insurance_type: "",
    type: "",
    body_type: "",
    images: [],
    brand: "",
    model: "",
    year: "",
    transmission: "",
    fuel: "",
    drive: "",
    engine: "",
    engine_output: "",
    technical_condition: "",
    on_drive: "",
    fuel_city: "",
    fuel_motorway: "",
    fuel_mixed: "",
    passenger_seats: "",
    doors: "",
    color_exterior: "",
    color_interior: "",
    car_documents: "",
  };

  addAutoForm = new AutoAddClass(this.initialData, inject(Injector));
  filesList: File[] = [];
  imageUrls: (string | ArrayBuffer)[] = [];

  handleFileInput(event: Event) {
    const input: any = event.target as HTMLInputElement;
    if (input.files.length > 0) {
      this.filesList = [...this.filesList, ...input.files];

      if (this.filesList.length > 0) {
        this.readFiles(this.filesList);
      }
    }

    console.log(this.filesList);
  }

  readFiles(files: File[]) {
    this.imageUrls = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrls.push(e.target?.result as string);
      };

      reader.readAsDataURL(files[i]);
    }
  }

  deleteImage(index: number) {
    this.filesList = this.filesList.filter(
      (file) => this.filesList.indexOf(file) !== index
    );

    this.readFiles(this.filesList);
  }

  handlePaymentAllowed(event: Event) {
    const input: any = event.target as HTMLInputElement;
    if (input.value) {
      const arrayControl = this.addAutoForm.get(
        "payments_allowed"
      ) as FormArray;
      arrayControl.clear();

      arrayControl.push(this.formBuilder.control(input.value));
    }
  }

  threeNumsValidation(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value < "1") {
      this.addAutoForm.patchValue({ engine_output: "" });
    }

    if (input.value.length > 3) {
      input.value = input.value.slice(0, 3);
      this.addAutoForm.patchValue({ engine_output: input.value });
    }
  }

  engineCapacityValidator(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value < "1") {
      this.addAutoForm.patchValue({ engine: "" });
    }

    if (input.value.length > 4) {
      input.value = input.value.slice(0, 3);
      this.addAutoForm.patchValue({ engine: input.value });
    }
  }

  onSubmit() {
    const dataToCreate = {
      ...this.addAutoForm.value,
      images: this.filesList,
    };

    console.log(dataToCreate);

    this.autoService.createRent(dataToCreate).subscribe(
      (data) => {
        console.log("Received data:", data);
        sessionStorage.removeItem("myAuto");
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  }
}
