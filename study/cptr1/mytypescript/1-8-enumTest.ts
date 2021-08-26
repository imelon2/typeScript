{
    /**
     * Enum
     */
    // javascript 없는 타입!

    const MAX_num = 6;

    const DATYS_ENUM = Object.freeze({"MONDAY" : 0, "TUSEDAY" : 1 , "WENSDAY" : 2})
    const dayOfToday = DATYS_ENUM.MONDAY;

    // typeScript
    enum DAYS {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    
}