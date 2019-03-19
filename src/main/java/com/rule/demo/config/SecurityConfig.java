/*
 * @projectName springsecurity-demo
 * @package com.rule.demo.config
 * @className com.rule.demo.config.SecurityConfig
 * @copyright Copyright 2019 Thuisoft, Inc. All rights reserved.
 */
package com.rule.demo.config;

import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * SecurityConfig
 *
 * @author goukun
 * @version 1.0.0
 * @description TODO
 * @date 2019-3-19 12:33
 */
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)  //  启用方法级别的权限认证
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers("/", "/css/**", "/img/**", "/layui/**", "/plugins/**", "/login.html", "/js/**", "/login").permitAll()
            .antMatchers("/admin/**").hasRole("ADMIN")
            .and()
            .formLogin()
            .loginPage("/login")
            .successForwardUrl("/index")
            .and()
            .authorizeRequests()
            .anyRequest()
            .authenticated()
            .and()
            .logout()
            .and()
            .csrf().disable();          // 关闭csrf防护;
    }


}
