package com.jft.market.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomAuthenticationProvider customeAuthenticationProvider;

	@Autowired
	private CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler;

	@Autowired
	private CustomLogoutSuccessHandler customLogoutSuccessHandler;

/*
	@Override
	@Autowired
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(customeAuthenticationProvider);
	}
*/

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// Login configuration
		http.formLogin()
				.loginPage("/login")
				.defaultSuccessUrl("/homepage")
				.failureUrl("/loginFailed")

				//.successHandler(customAuthenticationSuccessHandler)
			/*	.defaultSuccessUrl("homepage")*/
				.permitAll();

		// Logout configuration
		http.logout()
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
				.logoutSuccessUrl("/login"); // call this API
		//.logoutSuccessHandler(customLogoutSuccessHandler);
				/*.logoutSuccessUrl("login")
				.permitAll();*/

		// Authorize requests
		http
				.csrf().disable()
				.authenticationProvider(customeAuthenticationProvider)
				.authorizeRequests()
				.antMatchers("/api/v1/user/create").permitAll()
				.antMatchers("/static/**").permitAll()
				.anyRequest().authenticated();
		/*		.and()
				.formLogin()
*//*				.loginPage("/login")
				.defaultSuccessUrl("/homepage")*//*
				.successHandler(customAuthenticationSuccessHandler)
				.failureHandler()
				.failureUrl("/loginFailed")
				.permitAll()
				.and()
				.logout()
				.permitAll();*/
	}

}
