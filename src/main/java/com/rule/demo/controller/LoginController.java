/*
 * @projectName springsecurity-demo
 * @package com.rule.demo.controller
 * @className com.rule.demo.controller.LoginController
 * @copyright Copyright 2019 Thuisoft, Inc. All rights reserved.
 */
package com.rule.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * LoginController
 *
 * @author goukun
 * @version 1.0.0
 * @description TODO
 * @date 2019-3-19 12:45
 */
@Controller
public class LoginController {

    @RequestMapping("/")
    public String root(){
        return "login";
    }

    @RequestMapping("/login")
    public String login(){
        return "login";
    }

    @RequestMapping("/index")
    public String index(){
        return "admin/index";
    }

    @RequestMapping("/logout")
    public String logout(){
        return "login";
    }
}
