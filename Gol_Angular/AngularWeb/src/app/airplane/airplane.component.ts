import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Airplane } from '../airplane/airplane';
import $ from 'jquery';

@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.css']
})
export class AirplaneComponent implements OnInit {

  _airplanes: Object;
  _airplane = new Airplane(null, null, null, null);

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAirplanes().subscribe(
      data => this._airplanes = data
    );

    $("#btnAddAirplane").on("click", function () {
      this._airplane = new Airplane(null, null, null, null);

      $("#Id").val("");
      $("#Model").val("");
      $("#QtdPassengers").val("");
      $("#CreationDate").val("");
  
      $(".formFields").show("slow");
      $(this).hide();
    });
  }
  onSubmit(data) {
    if ($("#Id").val()) {
      this._airplane.Model = $("#Model").val();
      this._airplane.QtdPassengers = $("#QtdPassengers").val();


      if (this._airplane.Model && this._airplane.QtdPassengers) {
        var airplane = new Airplane(this._airplane.Id, this._airplane.Model, parseInt(this._airplane.QtdPassengers.toString()), this._airplane.CreationDate);
        this.dataService.updateAirplane(airplane).subscribe(
          data => this.ngOnInit(),
          error => console.error('Error', error));
      }
    }
    else {
      this._airplane = data;
      if (this._airplane.Model && this._airplane.QtdPassengers) {
        var airplane = new Airplane(0, this._airplane.Model, parseInt(this._airplane.QtdPassengers.toString()), null);
        this.dataService.createAirplane(airplane).subscribe(
          data => this.ngOnInit(),
          error => console.error('Error', error));
      }
    }
      $(".formFields").hide("slow");
      $("#btnAddAirplane").show();
  }
  showData(data) {
    $("#formFields").show("slow");
    $("#Id").val(data.id);
    $("#Model").val(data.model);
    $("#QtdPassengers").val(data.qtdPassengers);
    $("#CreationDate").val(data.creationDate);

    this._airplane.Id = data.id;
    this._airplane.Model = data.model;
    this._airplane.QtdPassengers = data.qtdPassengers;
    this._airplane.CreationDate = data.creationDate;

  }
  onEditAirplane(airplane) {
    this.dataService.getAirplane(airplane.id).subscribe(
      data => this.showData(data),
      error => console.error('Error', error)
    );
  }
  onDeleteAirplane(airplane) {
    var result = confirm("Tem certeza que deseja excluir esse registro?");
    if (result) {
      this.dataService.deleteAirplane(airplane.id).subscribe(
        data => this.ngOnInit(),
        error => console.error('Error', error)
      );
    }
  }


}
