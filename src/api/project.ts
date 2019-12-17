import request, { parseUrlWithUrlParams } from '@/utils/request';
import { PROJECT } from '@/constants/url.constant';

export default class ProjectApi {
  public static getProjectById(projectId: string) {
    return request.get(parseUrlWithUrlParams(PROJECT.BASE, { id: projectId }));
  }
}
