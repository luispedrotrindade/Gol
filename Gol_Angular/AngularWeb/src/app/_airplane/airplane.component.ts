// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { Observable } from 'rxjs';
// import { Airplane } from '../airplane/airplane';
// import $ from 'jquery';

// @Component({
//   selector: 'app-airplane',
//   templateUrl: './airplane.component.html',
//   styleUrls: ['./airplane.component.css']
// })
// export class AirplaneComponent implements OnInit {

//   _airplanes: Object;

//   constructor(private dataService: DataService) { }

//   ngOnInit(): void {
//     this.dataService.getAirplanes().subscribe(
//       data => this._airplanes = data
//     );

//     $("#btnAddAirplane").on("click", function () {
//       $(".formFields").show("slow");
//       $(this).hide();
//     });
//   }
//   onSubmit(data) {
//     if (data.Id) {
//       if (data.Model && data.QtdPassengers) {
//         var airplane = new Airplane(data.Id, data.Model, parseInt(data.QtdPassengers), data.CreationDate);
//         this.dataService.updateAirplane(airplane).subscribe(
//           data => this.ngOnInit(),
//           error => console.error('Error', error));
//       }
//     }
//     else {
//       if (data.Model && data.QtdPassengers) {
//         var airplane = new Airplane(0, data.Model, parseInt(data.QtdPassengers), null);
//         this.dataService.createAirplane(airplane).subscribe(
//           data => this.ngOnInit(),
//           error => console.error('Error', error));
//       }
//     }
//   }
//   showData(data) {
//     $("#formFields").show("slow");
//     $("#Id").val(data.id);
//     $("#Model").val(data.model);
//     $("#QtdPassengers").val(data.qtdPassengers);
//     $("#CreationDate").val(data.creationDate);
//   }
//   onEditAirplane(airplane) {
//     var _data;
//     this.dataService.getAirplane(airplane.id).subscribe(
//       data => this.showData(data),
//       error => console.error('Error', error)
//     );
//   }
//   onDeleteAirplane(airplane) {
//     var result = confirm("Tem certeza que deseja excluir esse registro?");
//     if (result) {
//       this.dataService.deleteAirplane(airplane.id).subscribe(
//         data => this.ngOnInit(),
//         error => console.error('Error', error)
//       );
//     }
//   }


// }
