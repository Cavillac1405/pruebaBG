import { Component, OnInit } from '@angular/core';
import { Movie } from '.././movie';
import { ActivatedRoute } from '@angular/router';
import { MoviesapiserviceService } from '../moviesapiservice.service';

@Component({
  selector: 'app-detallepelicula',
  templateUrl: './detallepelicula.component.html',
  styleUrls: ['./detallepelicula.component.css']
})
export class DetallepeliculaComponent   implements OnInit {

  constructor(private movieService:MoviesapiserviceService, private route:ActivatedRoute) {}
  id: String|null='0';
  movie:Movie|null=null;
  detalles=false;
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    //console.log(this.movies)
  }

  private getMovie(){
    this.movieService.getMoviebyID(this.id).subscribe(data=>{
      console.log(data)
      this.detalles=true;

      this.movie = data;
    })

  }
//movie:Movie = new;
}
