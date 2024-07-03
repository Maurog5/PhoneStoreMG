import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado } from 'src/app/models/estado';
import { EstadosService } from 'src/components/service/estados/estados.service';
import { PaisesService } from 'src/components/service/paises/paises.service';
import { PhonesService } from 'src/components/service/phonesCreated/phones.service'
import { Pais } from '../../app/models/pais';
import { Phone } from '../../app/models/phone';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  phoneForm!: FormGroup;
  paises: Pais[] = [];
  estados: Estado[] = [];
  phones: Phone[] = [];
  selectedFile: File | null = null;

  constructor(
    public fb: FormBuilder,
    public estadosService: EstadosService,
    public paisesService: PaisesService,
    public phonesService: PhonesService
  ) {}

  ngOnInit(): void {
    this.phoneForm = this.fb.group({
      //* agregamos el id que no sea requerido 
      id:[''],
      nombre: ['', Validators.required],
      price: ['', Validators.required],
      data: ['', Validators.required],
      modelo: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required],
      image_url: ['']
    });

    this.getAllPaises();
    //* ACa hago la carga de los estados una vez se seleccione un pais
    this.phoneForm.get('pais')?.valueChanges.subscribe((pais: any) => {
      if (pais && pais.id) {
        this.cargarEstados(pais.id);
      }
    });
    this.getAllPhones();
  }

  getAllPaises() {
    this.paisesService.getAllPaises().subscribe(
      (response) => {
        this.paises = response.sort();
        console.log("pasies: ",response)
       
      },
      (error) => {
          console.error(error);
      }
    );
  }

  cargarEstados(idPais: number) {
    this.estadosService.getAllEstados(idPais).subscribe(
      (response) => {
        this.estados = response;
       
      },
      (error) => {
        console.error('Error al cargar los estados:', error);
      }
    );
  }

  getAllPhones() {
    this.phonesService.getAllPhones().subscribe(
      (response) => {
        this.phones = response;
      
      },
      (error) => {
        console.error('Error al agregar los phones:', error);
      }
    );
  }

  deletePhone(phone: any) {
    this.phonesService.deletePhones(phone.id).subscribe((res) => {
      // TODO : METODO SPLICE = array.splice(start, deleteCount, item1, item2, ...);
    //* Aca busco el index  del telefono que quiero eliminar y coincida con el id del telefono 
     const index = this.phones.findIndex(p => p.id === phone.id)
     //* findIndex devuelve -1 cuando encuentra un elemento que no coincide con el index 
     if(index !== -1){
      this.phones.splice(index,1)
     }
     //* si cumple con la condicion es que encontro el index a elimar osea el phone 
     //*Aca, start = index, deleteCount = 1

    // Sino quiero usar splice uso un filter creo un nuevo array excluyendo el teléfono a eliminar
    //this.phones = this.phones.filter(p => p.id !== phone.id);
    });
  }

  editPhone (phone:any){
    this.phoneForm.setValue({
      id:phone.id,
      nombre: phone.nombre,
      price: phone.price,
      data: phone.data,
      modelo: phone.modelo,
      pais: phone.pais,
      estado: phone.estado,
      image_url: phone.image_url
    })

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    // Puedes mostrar información adicional sobre el archivo si lo necesitas
    console.log('Archivo seleccionado:', this.selectedFile);
  }
  
  save() {
    // Llamar al servicio para guardar los datos
    this.phonesService.savePhone(this.phoneForm.value).subscribe(
      (res) => {
        this.phoneForm.reset();
        
                //* validar en caso de que al editar queramos guardar en la misma lsita el elemento sin agregar uno nuevo 
                this.phones = this.phones.filter(phone => res.id !== phone.id )
                // lo que hago es eliminar los elementos que tengan ese id 

        //* Esto para hacer reactiva la db y se agregen a la tabla al momento de cargarlos
        this.phones.push(res);
      },
      (error) => {
        console.error('Error al guardar el teléfono:', error);
      }
    );
  }
}
