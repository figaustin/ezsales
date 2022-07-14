<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/main.js"></script>
	<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<nav class="bg-cyan-900 font-serif font-bold flex pl-20 pr-20 text-white justify-between items-center lg:border-b lg:border-slate-200/10" style="height: 60px">
	<a class="text-4xl" href="/"><h1 class="">EZSales</h1></a>
	<ul class="flex text-xl space-x-10">
		<li class="">
			<a class="hover:text-slate-300" href="/"><h4>Pricing</h4></a>
		</li>
		<li class="">
			<a class="hover:text-slate-300" href="/"><h4>FAQ</h4></a>
		</li>
	</ul>
	<ul class="flex text-xl space-x-8">
		<li class="">
			<a class="hover:text-slate-300" href="/business/register"><h5>Sign Up</h5></a>
		</li>
		<li class="">
			<a class="hover:text-slate-300" href="/business/login"><h5>Log in</h5></a>
		</li>
	</ul>
</nav>
<div class="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 text-black">
	<div class="w-full sm:max-w-md p-5 mx-auto">
		<h2 class="mb-12 text-center text-5xl font-bold ">Sign In</h2>
		<form:form action="/business/login" method="post" modelAttribute="businessLogin">
			<div class="mb-4">
				<form:label path="email" class="block mb-1" >Email Address</form:label>
				<form:input path="email" id="email" type="text" name="email"
				class="text-black py-2 px-3 border border-gray-300 focus:border-cyan-300 focus:outline-none focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
			</div>
			<div class="mb-4">
				<form:label path="password" class="block mb-1" >Password</form:label>
				<form:input path="password" id="password" type="password" name="password"
				class="text-black py-2 px-3 border border-gray-300 focus:border-cyan-300 focus:outline-none focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
			</div>

			<div class="mt-6">
				<input type="submit"
					   class="text-center text-2xl w-full inline-flex items-center justify-center px-4 py-2 bg-slate-700 border border-transparent rounded-md font-semibold capitalize text-black hover:bg-slate-800 active:bg-slate-800 focus:outline-none focus:border-cyan-700 focus:ring focus:ring-cyan-200 disabled:opacity-25 transition"
					   value="Log in"/>
			</div>
			<div class="mt-6 text-center">
				<a href="/business/register" class="underline">Don't have an account yet? Register.</a>
			</div>
		</form:form>
	</div>
</div>
</body>
</html>
