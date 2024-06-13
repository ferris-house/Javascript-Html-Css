// proxy基础使用
const data = { name: 'ferris' }

const { proxy, revoke } = Proxy.revocable(data, {
    get: (target, key, receiver) => {
        console.log(receiver === proxy) // receiver实际上就是代理对象
        const value = target[key];
        if (value) return value;
        throw new Error(`对象上不存在${key}值`)
    }
})

revoke(); // 取消代理

console.log(proxy.name) // 代理对象