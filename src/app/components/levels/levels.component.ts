import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Level } from 'src/app/shared/Levels';
import { LevelService } from './level.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LevelDataService } from 'src/app/services/DataLevels/level-data.service';


@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {


  levels!: Level[];

  levelsData: Level[] = [];

  levelForm!: FormGroup;

  operation: String = 'add';

  selectedLevel: Level | null = null;

  showAddForm = false;

  constructor(private levelService: LevelService, private fb: FormBuilder, private levelDataService: LevelDataService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loadLevels();
  }

  createForm() {
    this.levelForm = this.fb.group({
      description: ['', Validators.required],
      minPoints: ['', Validators.required],
      maxPoints: ['', Validators.required]
    });
  }

  formFields: any[] = [
    { label: 'Description', inputType: 'text', inputName: 'description', inputId: 'description', formControlName: 'description', placeholder: 'Description level', isRequired: true },
    { label: 'minPoints', inputType: 'number', inputName: 'minPoints', inputId: 'minPoints', formControlName: 'minPoints', placeholder: 'minPoints', isRequired: true },
    { label: 'maxPoints', inputType: 'number', inputName: 'maxPoints', inputId: 'maxPoints', formControlName: 'maxPoints', placeholder: 'maxPoints', isRequired: true },
];

  loadLevels() {
    this.levelService.getLevels().subscribe(
      data => {
        this.levels = data;
        this.levelsData = data;
        this.levelDataService.setLevels(data);

        const totalLevels = this.levelDataService.getTotalLevels();
        console.log('Total levels:', totalLevels);
      },
      error => {
        console.log('An error was occured.')
      },
      () => {
        console.log('loading levels was done.')
      }
    );
  }

  addLevel() {
    const newLevel = this.levelForm.value as Level;
    this.levelService.addLevel(newLevel).subscribe(
      res => {
        this.loadLevels();
        this.resetForm();
        Swal.fire('Success', 'Level added successfully!', 'success');
      },
      error => {
        Swal.fire('Error', 'Failed to add level', 'error');
      }
    )
  }

  updateLevel() {
    if (this.selectedLevel) {
      console.log(this.selectedLevel)
      this.selectedLevel.description = this.levelForm.get('description')?.value;
      this.selectedLevel.maxPoints = this.levelForm.get('maxPoints')?.value;
      this.selectedLevel.minPoints = this.levelForm.get('minPoints')?.value;

      this.levelService.updateLevel(this.selectedLevel).subscribe(
        () => {
          this.loadLevels();
          Swal.fire('Success', 'Level updated successfully!', 'success');
          this.resetForm();
        },
        () => {
          Swal.fire('Error', 'Failed to update level', 'error');
          this.resetForm()
        }
      );
    } else {
      Swal.fire('Error', 'Selected level is undefined, cannot update', 'error');
    }
  }


  cancelAddOrEdit() {
    this.operation = 'add';
    this.resetForm();
  }

  resetForm() {
    this.showAddForm = false;
    this.levelForm.reset();
  }

  deleteLevel(id: number | undefined) {
    if (id !== undefined) {
      this.levelService.deleteLevel(id).subscribe(
        res => {
          this.selectedLevel = null;
          this.loadLevels();
          Swal.fire('Success', 'Level deleted successfully!', 'success');
        },
        () => {
          Swal.fire('Error', 'Failed to delete level', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'No level selected, cannot delete', 'error');
    }
  }

  editLevel(level: Level) {
    this.operation = 'update';
    this.selectedLevel = level;
    this.levelForm.setValue({
      description: level.description,
      minPoints: level.minPoints,
      maxPoints: level.maxPoints,
    });
    this.showAddForm = true;
  }


}
