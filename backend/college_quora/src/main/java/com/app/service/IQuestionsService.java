package com.app.service;

import java.util.List;

import com.app.pojo.Questions;

public interface IQuestionsService {
List<Questions> getAllQuestions();
Questions addNewQuestion(Questions question);
void deleteQuestion(Questions id);
}
