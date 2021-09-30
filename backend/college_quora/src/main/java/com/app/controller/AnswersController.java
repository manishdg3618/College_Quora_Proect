package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Answers;
import com.app.pojo.Questions;
import com.app.service.IAnswersService;

@RestController
@RequestMapping("/answers")
@CrossOrigin
public class AnswersController {

	@Autowired
	private IAnswersService answersService;
	
	@GetMapping("/{qid}")
	public List<Answers> getAnswerById(@PathVariable Questions qid)
	{
		return answersService.getAnswerById(qid);
	}
	
	@PostMapping
	public Answers addAnswer(@RequestBody  Answers answer)
	{
		return answersService.addAnswer(answer);
	}
	
	@DeleteMapping("/{id}")
	public void deleteQuestion(@PathVariable Answers id)
	{
       answersService.deleteAnswer(id);
		
	}
}
