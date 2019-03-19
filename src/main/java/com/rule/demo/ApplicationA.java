/*
 * @projectName springsecurity-demo
 * @package com.rule.demo
 * @className com.rule.demo.SpringApplication
 * @copyright Copyright 2019 Thuisoft, Inc. All rights reserved.
 */
package com.rule.demo;

import com.sun.glass.ui.Application;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * SpringApplication
 *
 * @author goukun
 * @version 1.0.0
 * @description TODO
 * @date 2019-3-19 12:27
 */
@SpringBootApplication
public class ApplicationA {
    public static void main(String[] args) {
        // 让Spring应用启动起来，这个原理就是启动spring的主入口
        SpringApplication.run(ApplicationA.class,args);
    }
}
