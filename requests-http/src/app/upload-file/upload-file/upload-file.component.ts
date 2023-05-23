import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { environmentNode } from 'src/environment/environment';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit{

  files: Set<File>;
  progress = 0;

  ngOnInit(): void { }
  constructor(private service: UploadFileService){}

  onChanges(event: any){
    const selectedFiles = <FileList>event.srcElement.files;
    const fileNames = [];
    this.files = new Set();
    for(let i = 0; i<selectedFiles.length; i++){
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
  }

  onUpload(){
    if(this.files && this.files.size){
      this.service.upload(this.files, environmentNode.BASE_URL+'/uploads')
      .pipe(
        uploadProgress(progress =>{
          console.log(progress);
          this.progress = progress;
        }),
        filterResponse()
      )
      .subscribe(response => console.log('Upload Concluido'))
    }
  }

  
  onDownloadExcel(){
    this.service.download(environmentNode.API+'downloadExcel')
    .subscribe((res: any) => {
      this.service.handleFile(res, 'ponto.xlsx');
    });
  }

  onDownloadPdf(){
    this.service.download(environmentNode.API+'downloadPdf')
    .subscribe((res: any) => {
      this.service.handleFile(res, 'seguro.pdf');
    });
  }
  

}
