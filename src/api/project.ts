import request, { parseUrlWithUrlParams } from '@/utils/request';
import { PROJECT } from '@/constants/url';

export default class ProjectApi {
  public static getProjectById(projectId: string) {
    return request.get(parseUrlWithUrlParams(PROJECT.BASE, { id: projectId }));
  }
}
