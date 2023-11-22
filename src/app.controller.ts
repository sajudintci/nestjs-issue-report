import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { LibrariesHelper } from './helpers/libraries.helper';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly libHelper: LibrariesHelper,
  ) {}

  @Get()
  async getHello(@Res() res) {
    const libHel = await this.libHelper.eventCounter();
    const resData = this.appService.getHello();
    res.status(200).json({
      libHel,
      resData,
    });
  }
}
