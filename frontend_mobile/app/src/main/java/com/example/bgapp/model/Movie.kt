package com.example.bgapp.model

import android.os.Parcelable
import com.google.gson.annotations.SerializedName
import kotlinx.android.parcel.Parcelize

@Parcelize
data class Movie(
    @SerializedName("id")
    val id : String ?,

    @SerializedName("title")
    val title : String?,

    @SerializedName("poster_path")
    val poster : String?,

    @SerializedName("original_language")
    val original_language : String?,

    @SerializedName("vote_average")
    val vote_average : String?,

    @SerializedName("adult")
    val adult : String?,

    @SerializedName("overview")
    val overview : String?,

    @SerializedName("popularity")
    val popularity : String?,

    @SerializedName("release_date")
    val release : String?

) : Parcelable{
    constructor() : this("", "", "", "", "", "", "", "", "")
}