import { Service } from 'egg';

enum type {
    pv = 'pv'
}

interface collect {
    type: type, // 指标枚举
}

/**
 * Collect Service
 */
export default class CollectService extends Service {

    /**
     * 指标收集总入
     * @param model - your name
     */
    public async getCollect(collect: collect) {
        const { type } = collect
        switch (type) {
            case 'pv':
                this.collectPv(collect)
                break
            default:

                break
        }
    }

    // pv 收集接口
    public async collectPv(collect: collect) {

        return collect
    }
}
