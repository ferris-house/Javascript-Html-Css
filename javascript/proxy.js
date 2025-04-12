// proxy基础使用
let data = { name: 'ferris' }

const { proxy, revoke } = Proxy.revocable(data, {
    get: (target, key, receiver) => {
        console.log(receiver === proxy) // receiver实际上就是代理对象
        const value = target[key];
        if (value) return value;
        throw new Error(`对象上不存在${key}值`)
    }
})



data = proxy;

revoke(); // 取消代理

console.log(data);
console.log(proxy); // 代理对象1