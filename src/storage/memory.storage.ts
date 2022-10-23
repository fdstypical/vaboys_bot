export class MemoryStorage<K = unknown, V = unknown> implements Map<K, V> {
  private storage = new Map<K, V>();

  public get getStore(): Map<K, V> {
    return this.storage
  }

  public get(key: K): V | undefined {
    return this.getStore.get(key);
  }

  public has(key: K): boolean {
    return this.getStore.has(key);
  }

  public set(key: K, value: V): this {
    this.getStore.set(key, value);
    return this;
  }

  public get size(): number {
    return this.getStore.size;
  }

  public entries(): IterableIterator<[K, V]> {
    return this.getStore.entries();
  }

  public keys(): IterableIterator<K> {
    return this.getStore.keys();
  }

  public values(): IterableIterator<V> {
    return this.getStore.values();
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.getStore[Symbol.iterator]();
  }

  [Symbol.toStringTag] = '[object AsyncContext]';

  public clear(): void {
    return this.getStore.clear();
  }

  public delete(key: K): boolean {
    return this.getStore.delete(key);
  }

  public forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any,
  ): void {
    return this.getStore.forEach(callbackfn, thisArg);
  }
}