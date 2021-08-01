interface Profession {
    job: string;
    does(jobType: string);
}

class Person implements Profession {
    job: string;
    does(jobType: string) {
        throw new Error("Method not implemented.");
    }
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    display(): void {
        console.log("\nFirstName: " + this.firstName + "\tLastName: " + this.lastName);
    }

}

class Painter extends Person {
    constructor({ firstName, lastName }: { firstName: string; lastName: string; }) {
        super(firstName, lastName);
    }
    setJob(job: string): void {
        this.job = job;
    }
    does(job: string): void {
        this.setJob(job);
    }

    display(): void {
        super.display();
        console.log("Profession: " + this.job);
    }
}

let painter = new Painter({ firstName: "MF", lastName: "Hussain" });
painter.does("painting");
painter.display();