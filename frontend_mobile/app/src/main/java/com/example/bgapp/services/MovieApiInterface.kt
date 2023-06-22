package com.example.bgapp.services


import com.example.bgapp.model.ApiResponse
import com.example.bgapp.model.Movie
import retrofit2.Call
import retrofit2.http.GET

interface MovieApiInterface {

    @GET("/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=bbf5a3000e95f1dddf266b5e187d4b21")
    fun getMovieList(): Call<ApiResponse>

    @GET("/3/movie/6562?language=en-US&api_key=bbf5a3000e95f1dddf266b5e187d4b21")
    fun getMovieByID(id: String): Call<Movie>
}