
'use strict';

const State = require('../ledger-api/state.js');

/**
 * SurveyQuestion class extends State class
 * Class will be used by application and smart contract to define a survey question
 * Element : surveyKey, questionNum, title, type, contents
 * Class Name Marked by DNS : org.jnu.surveyquestion
 */
class SurveyQuestion extends State {

    constructor(obj) {
        super(SurveyQuestion.getClass(), [obj.surveyKey, obj.questionNum]);
        Object.assign(this, obj);
    }

    static fromBuffer(buffer) {
        return SurveyQuestion.deserialize(buffer);
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }

    static deserialize(data) {
        return State.deserializeClass(data, SurveyQuestion);
    }

    static createInstance(surveyKey, questionNum, title, type, contents) {
        return new SurveyQuestion({ surveyKey, questionNum, title, type, contents });
    }

    static getClass() {
        return 'org.jnu.surveyquestion';
    }
}

module.exports = SurveyQuestion;