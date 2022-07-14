<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>EZSales</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="">
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

        <div class="">
            <div class="flex max-w-lg container mx-auto text-3xl mt-28 w-full">
                <p>A lightweight and easy Point-of-sale solution for your small business.</p>
            </div>
            <div class="grid grid-cols-3 border-t-2 border-slate-600 mt-14 p-16 text-xl gap-12 w-full">
                <div class="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p class="text-center">Easily accept any type of payment.</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p class="text-center">Keep track of employees' hours, wages and individual sales.</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto flex-column" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p class="text-center">Quickly manage your inventory and get notifications when stock is low.</p>
                </div>
            </div>
        </div>


    </body>
</html>
