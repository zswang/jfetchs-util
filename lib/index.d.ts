export interface ICacheStore<T> {
    /**
     * 加载缓存数据 load data from cache
     * @param key 键值
     * @return 返回获取到的数据
     */
    load(key: string | number): Promise<T>;
    /**
     * 保存缓存数据 save data to cache
     * @param key 键值
     * @param data 保存的数据
     * @param expire 过期时间，单位秒
     * @return 返回保存是否成功
     */
    save(key: string | number, data: T, expire: number): Promise<boolean>;
    /**
     * 移除缓存数据 remove this cache data
     * @param key 键值
     * @return 返回移除是否成功
     */
    remove(key: string | number): Promise<boolean>;
}
