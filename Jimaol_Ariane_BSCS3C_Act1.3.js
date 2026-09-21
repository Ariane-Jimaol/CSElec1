let adopterName = "Ariane";
let adopterAge = 24;
let adopterCity = "Calbayog";
let petName = "Coco";
let petType = "Dog";
let petBreed = "Shih Tzu";
let petAge = 2;
let adoptionFee = 500;
let applicationStatus = "Approved";
let hasValidID = true;


const shelterName = "Happy Paws Shelter";
const shelterLocation = "Calbayog City";
const contactNumber = "09123456789";
const maxPets = 5;
const dogFee = 500;
const catFee = 400;
const birdFee = 300;
const minimumAge = 18;
const systemVersion = "1.0";
const currency = "PHP";



const pets = [
    {
        name: "Coco",
        type: "Dog",
        breed: "Shih Tzu",
        age: 2,
        available: true
    },
    {
        name: "Charlie",
        type: "Cat",
        breed: "Persian",
        age: 1,
        available: true
    },
    {
        name: "Bantay",
        type: "Dog",
        breed: "Aspin",
        age: 3,
        available: false
    }
];


const adopters = [
    {
        name: "Ariane",
        age: 24,
        city: "Calbayog"
    },
    {
        name: "Indira",
        age: 22,
        city: "Catbalogan"
    },
    {
        name: "Joycel",
        age: 21,
        city: "Calbayog"
    }
];


const applications = [
    {
        adopter: "Ariane",
        pet: "Coco",
        status: "Approved"
    },
    {
        adopter: "Indira",
        pet: "Charlie",
        status: "Pending"
    },
    {
        adopter: "Joycel",
        pet: "Bantay",
        status: "Pending"
    }
];



const adopter = {
    name: adopterName,
    age: adopterAge,
    city: adopterCity,
    validID: hasValidID
};


const selectedPet = {
    name: petName,
    type: petType,
    breed: petBreed,
    age: petAge,
    fee: adoptionFee
};


const shelter = {
    name: shelterName,
    location: shelterLocation,
    contact: contactNumber
};



const allPets = [
    ...pets,
    {
        name: "Max",
        type: "Dog",
        breed: "Golden Retriever",
        age: 4,
        available: true
    }
];


const allAdopters = [
    ...adopters,
    {
        name: "Maria",
        age: 25,
        city: "Tacloban"
    }
];



const displayWelcome = () => {
    console.log(`Welcome to ${shelterName}!`);
};


const checkAge = (age) => {
    return age >= minimumAge;
};


const calculateFee = (type) => {
    if (type === "Dog") {
        return dogFee;
    } else if (type === "Cat") {
        return catFee;
    } else {
        return birdFee;
    }
};


const getPetNames = (petList) => {
    return petList.map(pet => pet.name);
};


const showPet = (pet) => {
    console.log(
        `Pet: ${pet.name} | Type: ${pet.type} | Breed: ${pet.breed} | Age: ${pet.age}`
    );
};



console.log(`=== ${shelterName} ===`);

displayWelcome();

console.log(`Shelter Location: ${shelterLocation}`);

console.log(`Contact Number: ${contactNumber}`);

console.log(`Adopter: ${adopterName}`);

console.log(`Selected Pet: ${petName}`);

console.log(`Pet Type: ${petType}`);

console.log(`Pet Breed: ${petBreed}`);

console.log(`Pet Age: ${petAge} years old`);

console.log(`Adoption Fee: ${currency} ${adoptionFee}`);

console.log(`Application Status: ${applicationStatus}`);



const petNames = pets.map(pet => pet.name);

const petBreeds = pets.map(pet => pet.breed);

console.log(`Pet Names: ${petNames.join(", ")}`);

console.log(`Pet Breeds: ${petBreeds.join(", ")}`);



const availablePets = pets.filter(
    pet => pet.available === true
);

const youngPets = pets.filter(
    pet => pet.age <= 2
);

console.log(`Available Pets: ${availablePets.length}`);

console.log(`Young Pets: ${youngPets.length}`);



const adoptionRecord = {
    adopter: {
        name: "Ariane",
        contact: {
            phone: "09123456789"
        }
    },
    pet: {
        name: "Coco",
        details: {
            type: "Dog",
            breed: "Shih Tzu"
        }
    }
};


const secondRecord = {
    adopter: {
        name: "Indira"
    },
    pet: {
        name: "Charlie",
        details: {
            type: "Cat",
            breed: "Persian"
        }
    }
};


console.log(
    `${adoptionRecord.adopter?.name}'s contact number is ${adoptionRecord.adopter?.contact?.phone}.`
);

console.log(
    `${secondRecord.adopter?.name} is applying to adopt ${secondRecord.pet?.name}, a ${secondRecord.pet?.details?.breed}.`
);


if (checkAge(adopterAge)) {
    console.log(
        `${adopterName} is eligible to adopt.`
    );
} else {
    console.log(
        `${adopterName} is not eligible to adopt.`
    );
}


if (adopter.validID) {
    console.log(
        `${adopter.name} has a valid ID.`
    );
} else {
    console.log(
        `${adopter.name} needs to provide a valid ID.`
    );
}



const finalFee = calculateFee(selectedPet.type);

console.log(
    `The adoption fee for ${selectedPet.breed} is ${currency} ${finalFee}.`
);



console.log("=== AVAILABLE PETS ===");

availablePets.forEach(showPet);


// ==========================================
// 15. DISPLAY ALL PET NAMES
// ==========================================

console.log("=== ALL PET NAMES ===");

const names = getPetNames(allPets);

console.log(names.join(", "));



console.log("=== REGISTERED ADOPTERS ===");

for (let i = 0; i < allAdopters.length; i++) {
    console.log(
        `${i + 1}. ${allAdopters[i].name} - ${allAdopters[i].city}`
    );
}



console.log("=== ADOPTION APPLICATIONS ===");

for (let i = 0; i < applications.length; i++) {
    console.log(
        `${applications[i].adopter} | Pet: ${applications[i].pet} | Status: ${applications[i].status}`
    );
}



console.log(
    `Congratulations, ${adopter.name}! You have applied to adopt ${selectedPet.name}, a ${selectedPet.breed}.`
);

console.log(
    `Your application is currently ${applicationStatus}.`
);

console.log(
    `Thank you for choosing ${shelter.name} in ${shelter.location}.`
);