package com.app.service;

import java.util.List;

import com.app.pojo.Answers;
import com.app.pojo.Questions;

public interface IAnswersService {
List<Answers> getAnswerById(Questions q);
Answers addAnswer(Answers answer);
void deleteAnswer(Answers answer);
}
