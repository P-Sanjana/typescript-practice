class StudentModule {
    name: string;
    branch: string;

    constructor(name: string, branch: string) {
        this.name = name;
        this.branch = branch;
    }

    getName(): string {
        return this.name;
    }
    getBranch(): string {
        return this.branch;
    }
}
export = StudentModule;
