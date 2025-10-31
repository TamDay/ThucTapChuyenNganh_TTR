package com.example.ThucTap.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping ("/")
    public String index(){
        return "index";
    }
    @GetMapping ("/about")
    public String about(){
        return "about";
    }
    @GetMapping ("/shop")
    public String shop(){
        return "shop";
    }
    @GetMapping ("/contact")
    public String contact(){
        return "contact";
    }
    @GetMapping ("/single")
    public String single(){
        return "single";
    }
}
