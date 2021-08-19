{
    /**
     * Intersection Type: &&
     */

    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        empolyeeId : number;
        work: () => void;
    }

    function internWork (person: Student & Worker) {
        console.log(person.name, person.empolyeeId, person.work());
    }

    // 호출
    // && 로 타입을 묶었기에, 4개(Student type + Worker type) 다 들어가야함
    internWork({
        name: 'won',
        score: 1,
        empolyeeId : 123,
        work: () =>void;
    })
}