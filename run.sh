#!/bin/bash

rm -r output 
npx codeceptjs run --grep "@addRole" --plugins allure  
allure serve output

