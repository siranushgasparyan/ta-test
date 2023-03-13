import { MockObject } from '@Mocks/mockObject';

export class GetCartProductsMock extends MockObject {
    public constructor() {
        super();
        this.path = {
            url: '*/products',
            method: 'get',
        };
    }

    public getFixture(): Record<string, unknown>[] {
        return [];
    }
}
