import { expect } from 'chai';
import { followPath, parseMap } from '..';
import { BaseCorrectInput, CorrectInputIntersections, CorrectInputLettersFoundOnTurns, CorrectInputDontCollectLetterSameLocationTwice, CorrectInputIgnoreStuffAfterEndOfPath, MssingEndCharInput, MissingStartCharInput, MultipleStartsInputFirstCase, MultipleStartsInputSecondCase, MultipleStartsInputThirdCase, ForkInPathInput, BrokenPathInput, MultipleStartingPathsInput } from './inputs';

type CharMap = string[][];


describe('Path Follower', () => {
  it('should collect letters and path correctly', () => {
    const simpleMap: CharMap = parseMap(BaseCorrectInput)
    const result = followPath(simpleMap);
    expect(result.letters).to.equal('ACB');
    expect(result.path).to.equal('@---A---+|C|+---+|+-B-x');
  });

  it('should collect letters and path correctly Correct Input Intersections', () => {
    const simpleMap: CharMap = parseMap(CorrectInputIntersections)
    const result = followPath(simpleMap);
    expect(result.letters).to.equal('ABCD');
    expect(result.path).to.equal('@|A+---B--+|+--C-+|-||+---D--+|x');
  });

  it('should collect letters and path correctly Correct Input Letters Found On Turns', () => {
    const simpleMap: CharMap = parseMap(CorrectInputLettersFoundOnTurns)
    const result = followPath(simpleMap);
    expect(result.letters).to.equal('ACB');
    expect(result.path).to.equal('@---A---+|||C---+|+-B-x');
  });

  it('should collect letters and path correctly Correct Input DontCollect Letter Same Location Twice', () => {
    const simpleMap: CharMap = parseMap(CorrectInputDontCollectLetterSameLocationTwice)
    const result = followPath(simpleMap);
    expect(result.letters).to.equal('GOONIES');
    expect(result.path).to.equal('@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x');
  });

  it('should collect letters and path correctly Correct Input Ignore Stuff After End Of Path', () => {
    const simpleMap: CharMap = parseMap(CorrectInputIgnoreStuffAfterEndOfPath)
    const result = followPath(simpleMap);
    expect(result.letters).to.equal('AB');
    expect(result.path).to.equal('@-A--+|+-B--x');
  });

  it('Invalid map: missing end character', () => {
    const invalidMap: CharMap = parseMap(MssingEndCharInput)
    expect(() => followPath(invalidMap)).to.throw('Invalid map: missing end character');
  });

  it('Invalid map: missing start character', () => {
    const invalidMap: CharMap = parseMap(MissingStartCharInput)
    expect(() => followPath(invalidMap)).to.throw('Invalid map: missing start character');
  });

  it('Invalid map: multiple start characters', () => {
    const invalidMap: CharMap = parseMap(MultipleStartsInputFirstCase)
    expect(() => followPath(invalidMap)).to.throw('Invalid map: multiple start characters');
  });

  it('Invalid map: multiple start characters Second Case Input', () => {
    const invalidMap: CharMap = parseMap(MultipleStartsInputSecondCase)
    expect(() => followPath(invalidMap)).to.throw('Invalid map: multiple start characters');
  });

  it('Invalid map: multiple start characters Third Case Input', () => {
    const invalidMap: CharMap = parseMap(MultipleStartsInputThirdCase)
    expect(() => followPath(invalidMap)).to.throw('Invalid map: multiple start characters');
  });

  it('Invalid map: multiple end characters', () => {
    const invalidMap: CharMap = parseMap(ForkInPathInput)
    expect(() => followPath(invalidMap)).to.throw('Invalid map: multiple end characters');
  });

  it('Invalid map: broken path', () => {
    const invalidMap: CharMap = parseMap(BrokenPathInput)
    expect(() => followPath(invalidMap)).to.throw('Invalid map: broken path');
  });

  it('Invalid map: multiple end characters', () => {
    const invalidMap: CharMap = parseMap(MultipleStartingPathsInput)
    expect(() => followPath(invalidMap)).to.throw('Invalid map: multiple end characters');
  });
});
