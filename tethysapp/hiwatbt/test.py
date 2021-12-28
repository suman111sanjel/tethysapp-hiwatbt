import numpy as np
from matplotlib import pyplot as plt
from numpy import random
xDim=1000
yDim=1000
Number_of_loops=15

import time

x1=random.randint(100, size=(xDim,yDim))
x2=random.randint(100, size=(xDim,yDim))

time_vector_np=[]
time_vector_dfl=[]

for npi in range(Number_of_loops):
    # Numpy '+' Operator
    stNp = time.time()
    x = x1+x2
    enNp = time.time()
    time_vector_np.append(enNp-stNp)

    # Double for-loop
    st_dfl=time.time()
    AddedArray=[]
    for i in range(xDim):
        row=[]
        for j in range(yDim):
            a=x1[i][j]+x2[i][j]
            row.append(a)
        AddedArray.append(row)
    en_dfl=time.time()
    time_vector_dfl.append(en_dfl-st_dfl)

print(time_vector_np)
print(time_vector_dfl)

# creating vector
vector_np = np.array(time_vector_np)
vector_dfl=np.array(time_vector_dfl)

# average time
avg1 = np.average(vector_np)
avg2 = np.average(time_vector_dfl)

# standard deviation
std1 = np.std(vector_np)
std2 = np.std(time_vector_dfl)

plt.hist(vector_np)
plt.title("Numpy '+' Operator")
plt.show()

plt.hist(time_vector_dfl)
plt.title("Double for-loop")
plt.show()
