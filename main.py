def minor(array):
    return array[0][0] * array[1][1] - array[1][0] * array[0][1]

def division(array):
    if len(array[0]) > 2:
        result = 0
        for i in range(len(array[0])):
            new_arr = []
            for j in range(len(array[0])):
                if j != i:
                    new_arr.append([array[j][k] for k in range(1, len(array[0]))])
            result += division(new_arr) * array[i][0] * (-1 + 2 * ((i + 1) % 2))
        return result
    else:
        return minor(array)

n = input()
n = int(n)
m = []
for i in range(n):
    m1 = input().split()
    for j in range(n):
        m1[j] = float(m1[j])
    m.append(m1)
print(division(m))