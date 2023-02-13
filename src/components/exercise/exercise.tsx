import React from "react";

export interface exercise {
    CreatedAt: string
    DeletedAt: string
    UpdatedAt: string
    ID: number
    name: string
    descr: string
    muscleGroupBroadName: string
    primaryMuscles: primaryMuscle[]
    secondaryMuscles: secondaryMuscle[]
    equipment: equipment[]
    advanced: string
    superset: string
    intensity: string
    compoundMovement: string
    exerciseImages: string[]
}

export interface primaryMuscle {
    name: string
    name2: string
    isFront: boolean
    image: string
    image2: string
}

export interface secondaryMuscle {
    name: string
    name2: string
    isFront: boolean
    image: string
    image2: string
}

export interface equipment {
    name: string
}
