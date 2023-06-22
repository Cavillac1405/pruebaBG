import { Component, OnInit } from '@angular/core';
import { MoviesapiserviceService } from '../moviesapiservice.service';
import { Movie } from '.././movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent  implements OnInit {

  movies:Movie[] = [];
  detalles=false;

  constructor(private movieService:MoviesapiserviceService, private router:Router) {}

  ngOnInit(): void {
    this.getMovies();
    //console.log(this.movies)
  }

  private getMovies(){
    this.movieService.getMovies().subscribe(data=>{
      console.log(data)

      this.movies = data;
    })

  }
  detallar(id: number){
    this.router.navigate(['detalles',id])
  }
  //movies= this.getMovies;

}

