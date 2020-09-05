import re
fname = open("regex_sum_840897.txt")
sum=0
count=0
for line in fname:
    f = re.findall('[0-9]+',line)
    for num in f:
        count+=1
        sum=sum+(int(num))
print("There are", count , "values with a sum of" , sum)


# Total sum is    301708
