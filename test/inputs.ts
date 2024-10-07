export const BaseCorrectInput = `
  @---A---+
          |
  x-B-+   C
      |   |
      +---+
`;

export const CorrectInputIntersections = `
  @
  | +-C--+
  A |    |
  +---B--+
    |      x
    |      |
    +---D--+
`;

export const CorrectInputLettersFoundOnTurns = `
  @---A---+
          |
  x-B-+   |
      |   |
      +---C
`;

export const CorrectInputDontCollectLetterSameLocationTwice = `
     +-O-N-+
     |     |
     |   +-I-+
 @-G-O-+ | | |
     | | +-+ E
     +-+     S
             |
             x
`;

export const CorrectInputIgnoreStuffAfterEndOfPath = `
  @-A--+
       |
       +-B--x-C--D
`

export const MssingEndCharInput = `   
     @--A---+
          |
    B-+   C
      |   |
      +---+
  `;

  export const MissingStartCharInput = `     
 -A---+
          |
  x-B-+   C
      |   |
      +---+
 `;

 export const MultipleStartsInputFirstCase = `
    @--A-@-+
          |
  x-B-+   C
      |   |
      +---+
 `;

 export const MultipleStartsInputSecondCase = `
   @--A---+
          |
          C
          x
      @-B-+
 `;

 export const MultipleStartsInputThirdCase = `
     @--A--x

  x-B-+
      |
      @
 `;

 export const ForkInPathInput = `
         x-B
          |
   @--A---+
          |
     x+   C
      |   |
      +---+
 `;

 export const BrokenPathInput = `
    @--A-+
        |
         
        B-x
 `

 export const MultipleStartingPathsInput = `
   x-B-@-A-x
 `