import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(): string {
    return this.adminService.getHello();
  }
  
  @Post('upload')
  //获取file
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file){
    return file
    // return {
    //   url: `http://localhost:3000/uploads/${file.filename}`
    // }
  }
}
