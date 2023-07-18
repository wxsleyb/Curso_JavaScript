let cachorro = {
    patas: 4,
    raça: 'SRD',
    latir: function(){
        console.log("au au");
    }
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raça = "labrador";

console.log(labrador.raça);
console.log(cachorro.raça);

let pastor = Object.create(cachorro);
pastor.raça = "pastor alemão";

console.log(pastor.raça);




