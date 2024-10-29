import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {

  constructor(private http: HttpClient) { }

  buscarEndereco() {
    var cep = (document.getElementById("cep") as HTMLInputElement).value;

    if (cep.length != 8) {
        alert("CEP inválido");
        return;
    }

    this.http.get("https://viacep.com.br/ws/" + cep + "/json/").subscribe((endereco: any) => {
      (document.getElementById("logradouro") as HTMLInputElement).value = endereco.logradouro;
      (document.getElementById("bairro") as HTMLInputElement).value = endereco.bairro;
      (document.getElementById("localidade") as HTMLInputElement).value = endereco.localidade;
      (document.getElementById("complemento") as HTMLInputElement).value = endereco.complemento;
      (document.getElementById("uf") as HTMLInputElement).value = endereco.uf;
      (document.getElementById("estado") as HTMLInputElement).value = endereco.estado;
      (document.getElementById("regiao") as HTMLInputElement).value = endereco.regiao;
      (document.getElementById("gia") as HTMLInputElement).value = endereco.gia;
      (document.getElementById("ibge") as HTMLInputElement).value = endereco.ibge;
      (document.getElementById("ddd") as HTMLInputElement).value = endereco.ddd;
      (document.getElementById("siafi") as HTMLInputElement).value = endereco.siafi;
    });
  }

  ngOnInit() {
  }

}
