package com.example.bgapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.bgapp.model.Movie
import com.example.bgapp.model.ApiResponse
import com.example.bgapp.services.MovieApiInterface
import com.example.bgapp.services.MovieApiService
import kotlinx.android.synthetic.main.activity_main.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response


class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        movies_list.layoutManager = LinearLayoutManager(this)
        movies_list.setHasFixedSize(true)
        getMovieData { movies : List<Movie> ->
            movies_list.adapter = MovieAdapter(movies)
        }
    }

    private fun getMovieData(callback: (List<Movie>) -> Unit){
        val apiService = MovieApiService.getInstance().create(MovieApiInterface::class.java)
        apiService.getMovieList().enqueue(object : Callback<ApiResponse> {
            override fun onFailure(call: Call<ApiResponse>, t: Throwable) {

            }

            override fun onResponse(call: Call<ApiResponse>, response: Response<ApiResponse>) {
                return callback(response.body()!!.movies)
            }

        })
    }

    private fun showDetailed( id : String){

        val apiService = MovieApiService.getInstance().create(MovieApiInterface::class.java)
        apiService.getMovieByID(id).enqueue(object : Callback<Movie> {
            override fun onFailure(call: Call<ApiResponse>, t: Throwable) {

            }

            override fun onResponse(call: Call<Movie>, response: Response<Movie>) {
                return callback(response.body()!!.movies)
            }


        })

    }

}