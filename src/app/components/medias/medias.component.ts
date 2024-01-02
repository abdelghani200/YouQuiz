import { Component, OnInit } from "@angular/core";
import { Media } from "src/app/shared/Media";
import Swal from 'sweetalert2';
import { MediaService } from "./media.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { QuestionServiceService } from "../questions/question-service.service";
import { Question } from "src/app/shared/Question";

@Component({
    selector: 'app-medias',
    templateUrl: './medias.component.html',
    styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit {

    medias!: Media[];

    selectedMedia: Media | null = null;

    questions!: Question[];

    operation = 'add';

    showAddForm = false;

    mediaForm!: FormGroup;


    constructor(private mediaService: MediaService, private fb: FormBuilder, private questionService: QuestionServiceService) { 
        this.formMedia()
    }

    ngOnInit(): void {
        this.getAllMedias();
        this.getQuestions()
    }


    formMedia() {
        this.mediaForm = this.fb.group({
            link: '',
            type: '',
            question_id: ['', Validators.required]
        })
    }

    getAllMedias() {
        this.mediaService.getMedias().subscribe(
            data => {
                this.medias = data;
                console.log(data)
            }
        )
    }

    deleteMedia(id: number | undefined) {
        if (id !== undefined) {
            this.mediaService.deleteMedias(id).subscribe(
                (res) => {
                    this.selectedMedia = null;
                    this.getAllMedias();
                    Swal.fire('Success', 'Question deleted successfully!', 'success');
                },
                (error) => {
                    Swal.fire('Success', 'Question deleted successfully!', 'success');
                }
            );
        } else {
            Swal.fire('Error', 'No question selected, cannot delete', 'error');
        }
    }

    addMedias() {
        const newMedia = this.mediaForm.value as Media;
        // console.log(newMedia)
        this.mediaService.addMedias(newMedia).subscribe(
            res => {
                this.getAllMedias();
                this.resetForm();
                Swal.fire('Success', 'Media added successfully!', 'success');
            },
            error => {
                Swal.fire('Error', 'Failed to add media', 'error');
            }
        )
    }


    cancelAddOrEdit() {
        this.operation = 'add';
        this.resetForm();
    }

    resetForm() {
        this.showAddForm = false;
        this.mediaForm.reset();
    }


    updateMedias() {

    }

    getQuestions() {
        this.questionService.getQuestions().subscribe(
          data => {
            this.questions = data;
            console.log(data);
          }
        );
      }

}