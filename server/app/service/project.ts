import { Service } from 'egg';

interface project {
    name: string, // 项目名称
    creator: string, // 创建者
    createAt: number, // 创建时间
}

/**
 * Collect Service
 */
export default class ProjectService extends Service {

    /**
     * sayHi to you
     * @param project - your name
     */
    public async create(project: project) {
        project = {
            ...project,
            createAt: Date.now()
        }
        return project
    }
}
