import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  PostsInCreatePostBodyDto,
  PostsInGetManyQueryDto,
  PostsOutCreatePostBodyDto,
  PostsOutGetManyDto,
} from './dto';
import { PostsReadService } from './services/posts.read.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly postsReadService: PostsReadService,
  ) {}

  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 200, type: PostsOutCreatePostBodyDto })
  @Post()
  create(
    @Body() body: PostsInCreatePostBodyDto,
  ): Promise<PostsOutCreatePostBodyDto> {
    return this.postsService.createPost(body);
  }

  @ApiOperation({ summary: 'Get Many Posts' })
  @ApiResponse({ status: 200, type: PostsOutGetManyDto })
  @Get()
  getMany(@Query() query: PostsInGetManyQueryDto): Promise<PostsOutGetManyDto> {
    return this.postsReadService.getMany(query);
  }
}
