class Book {
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.author = author;
        this.title = title;
        this.price = price;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getPrice(): number {
        return this.price;
    }
    displayBook(): void {
        console.log("\nTitle: " + this.title + "\tAuthor: " + this.author + "\tPrice: " + this.price);

    }
}

let book1 = new Book("Hello World", "Kranthi Kumar", 1200);
book1.displayBook();