// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini

class Mario {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: string = "mario";

    moveRight() {
        this.positionX += this.speed;
        console.log("Mario bergerak ke kanan");
    }

    moveLeft() {
        this.positionX -= this.speed;
        console.log("Mario bergerak ke kiri");
    }

    attacked() {
        if (this.invincible == true) {
            console.log("Mario kebal dari serangan!");
        } else {
            this.hp -= 1;
            this.currentForm = "mario";
            console.log("Mario terkena serangan!");
        }
    }

    status() {
        console.log("HP:", this.hp);
        console.log("Form:", this.currentForm);
        console.log("Posisi X:", this.positionX);
        console.log("Posisi Y:", this.positionY);
        console.log("Invincible:", this.invincible);
    }
}

class SuperMushroom extends Mario {
    use() {
        this.hp += 1;
        this.currentForm = "super mario";
        console.log("Mario menjadi Super Mario!");
    }
}

class FireFlower extends Mario {
    use() {
        this.hp += 1;
        this.currentForm = "fire mario";
        console.log("Mario menjadi Fire Mario!");
    }

    shootFireball() {
        console.log("Mario menembakkan bola api!");
    }
}

class SuperStar extends Mario {
    use() {
        this.invincible = true;
        console.log("Mario sekarang kebal!");
    }
} 
const mario = new Mario();
const mushroom = new SuperMushroom();
const flower = new FireFlower();
const star = new SuperStar();


console.log("=== MARIO AWAL ===");
mario.status();

console.log("\n=== SUPER MUSHROOM ===");
mushroom.use();
mushroom.status();

console.log("\n=== FIRE FLOWER ===");
flower.use();
flower.shootFireball();
flower.status();

console.log("\n=== SUPER STAR ===");
star.use();
star.attacked();
star.status();

console.log("\n=== BERGERAK ===");
mario.moveRight();
mario.moveLeft();
mario.status();

console.log("\n=== DISERANG ===");
mario.attacked();
mario.status();
