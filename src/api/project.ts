import request, { parseUrlWithUrlParams } from '@/utils/request';
import { PROJECT } from '@/config/url';
import type { ProjectDO } from '@/models/project';

export default class ProjectApi {
  public static getProjectById(projectId: string): Promise<ProjectDO> {
    return request.get(parseUrlWithUrlParams(PROJECT.BASE, { id: projectId }));
  }
}
